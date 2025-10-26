export interface tokensResponse {
  accessToken: string;
  refreshToken: string;
}

export interface refreshTokenResponse {
  refreshToken: string;
}

export interface refreshTokenRequest {
  refreshToken: string;
}
