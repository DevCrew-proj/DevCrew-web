import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KakaoAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const exist = params.get("exist");
        const authorization = params.get("Authorization");

        // 예시: 존재 여부와 Authorization 토큰을 콘솔에 출력
        console.log("Exist:", exist);
        console.log("Authorization:", authorization);

        if (authorization) {
            // localStorage.setItem("auth_token", authorization);
            sessionStorage.setItem("auth_token", authorization);
            console.log(
                "Authin session:",
                sessionStorage.getItem("auth_token")
            );
            navigate("/main");
        } else {
            // 예외 처리 로직 추가 가능
            console.log("Authorization token not found");
        }
    }, [navigate]);

    return <div>Authenticating...</div>;
};

export default KakaoAuth;
