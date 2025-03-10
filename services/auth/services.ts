import {
    LoginBodyType,
    RegisterBodyType,
} from "@/utils/schema-validations/auth.schema";
import { useMutation } from "@tanstack/react-query";
import {
    forgotPasswordChange,
    forgotPasswordEmail,
    forgotPasswordOtp,
    login,
    logout,
    register,
    verifyEmail,
} from "@/services/auth/api-services";
import { removeStorageItem, setStorageItem } from "@/utils/local-storage";
import { useAppDispatch } from "@/hooks/use-store";
import { loginUser, removeInfoLogin } from "@/hooks/user-slice";
import useToast from "@/hooks/use-toast";
import { closeBackdrop } from "@/hooks/use-state-slice";
import { ForgotPasswordEmailBodyType } from "@/utils/schema-validations/forgot-password.schema";

export const useServiceLogin = () => {
    const dispatch = useAppDispatch();

    return useMutation<API.TAuthResponse, TMeta, LoginBodyType>({
    mutationFn: login,
    onSuccess: (data) => {
        const { authProfile, token } = data;
        // Save access token in local storage
        setStorageItem("accessToken", `${token.tokenType} ${token.accessToken}`);
        // Save auth profile in redux storage
        dispatch(loginUser(authProfile));
        return data;
    },
    });
};

export const useServiceRegister = () => {
    const dispatch = useAppDispatch();
    return useMutation<TResponse, TMeta, REQUEST.TRegister>({
    mutationFn: register,
    onSuccess: () => {
        dispatch(closeBackdrop());
    },
    onError: () => {
        dispatch(closeBackdrop());
    },
    });
};

export const useServiceLogout = () => {
    const dispatch = useAppDispatch();
    return useMutation<TResponseData, TMeta>({
    mutationFn: logout,
    onSuccess: () => {
        removeStorageItem("accessToken");
        dispatch(removeInfoLogin());
        location.href = "/";
    },
    onError: () => {
        removeStorageItem("accessToken");
        dispatch(removeInfoLogin());
        location.href = "/";
    },
    });
};

export const useServiceVerifyEmail = () => {
    const { addToast } = useToast();
    return useMutation<TResponse, TMeta, REQUEST.TAuthVerifyEmail>({
    mutationFn: verifyEmail,
    onSuccess: (data) => {
        addToast({
        type: "success",
        description: data.value.message,
        duration: 5000,
        });
    },
    onError: (error) => {
        if (
        error.errorCode === "auth_email_exists" ||
        error.errorCode === "auth_register_failure"
        ) {
        addToast({
            type: "error",
            description: error.detail,
            duration: 5000,
        });
        }
    },
    });
};

export const useServiceForgotPasswordEmail = () => {
    return useMutation<TResponseData, TMeta, ForgotPasswordEmailBodyType>({
    mutationFn: forgotPasswordEmail,
    onSuccess: () => {},
    });
};

export const useServiceForgotPasswordOtp = () => {
    return useMutation<TResponseData, TMeta, API.TAuthForgotPasswordOtp>({
    mutationFn: forgotPasswordOtp,
    });
};

export const useServiceForgotPasswordChange = () => {
    return useMutation<TResponseData, TMeta, API.TAuthForgotPasswordChange>({
    mutationFn: forgotPasswordChange,
    });
};