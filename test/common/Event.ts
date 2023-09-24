export const payload = (body: string) => {
    return {
        body,
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'PostmanRuntime/7.32.3',
            Accept: '*/*',
            'Postman-Token': 'c8f220d4-71c3-4893-881b-07f350bb60e0',
            Host: 'localhost:3000',
            'Accept-Encoding': 'gzip, deflate, br',
            Connection: 'keep-alive',
            'Content-Length': '157'
        },
        httpMethod: 'POST',
        isBase64Encoded: false,
        multiValueHeaders: {
            'Content-Type': ['application/json'],
            'User-Agent': ['PostmanRuntime/7.32.3'],
            Accept: ['*/*'],
            'Postman-Token': ['c8f220d4-71c3-4893-881b-07f350bb60e0'],
            Host: ['localhost:3000'],
            'Accept-Encoding': ['gzip, deflate, br'],
            Connection: ['keep-alive'],
            'Content-Length': ['157']
        },
        multiValueQueryStringParameters: null,
        path: '/v2/tokens',
        pathParameters: null,
        queryStringParameters: null,
        requestContext: {
            accountId: 'offlineContext_accountId',
            apiId: 'offlineContext_apiId',
            authorizer: {
                claims: undefined,
                principalId: 'offlineContext_authorizer_principalId',
                scopes: undefined
            },
            domainName: 'offlineContext_domainName',
            domainPrefix: 'offlineContext_domainPrefix',
            extendedRequestId: 'e72c8bc9-1e45-4f75-baaa-3b1417264b31',
            httpMethod: 'POST',
            identity: {
                accessKey: null,
                accountId: 'offlineContext_accountId',
                apiKey: 'offlineContext_apiKey',
                apiKeyId: 'offlineContext_apiKeyId',
                caller: 'offlineContext_caller',
                cognitoAuthenticationProvider: 'offlineContext_cognitoAuthenticationProvider',
                cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
                cognitoIdentityId: 'offlineContext_cognitoIdentityId',
                cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
                principalOrgId: null,
                sourceIp: '::1',
                user: 'offlineContext_user',
                userAgent: 'PostmanRuntime/7.32.3',
                userArn: 'offlineContext_userArn'
            },
            operationName: undefined,
            path: '/v2/tokens',
            protocol: 'HTTP/1.1',
            requestId: '835c6d7d-6324-4bab-b31b-0de7af42c8dd',
            requestTime: '23/Sep/2023:23:23:46 -0500',
            requestTimeEpoch: 1695529426460,
            resourceId: 'offlineContext_resourceId',
            resourcePath: '/DESA/v2/tokens',
            stage: 'DESA'
        },
        resource: '/v2/tokens',
        stageVariables: null
    }
};

export const headers = (token: string) => {
    return {
        body: null,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'User-Agent': 'PostmanRuntime/7.32.3',
            Accept: '*/*',
            'Postman-Token': 'c8f220d4-71c3-4893-881b-07f350bb60e0',
            Host: 'localhost:3000',
            'Accept-Encoding': 'gzip, deflate, br',
            Connection: 'keep-alive',
            'Content-Length': '157'
        },
        httpMethod: 'POST',
        isBase64Encoded: false,
        multiValueHeaders: {
            'Content-Type': ['application/json'],
            'User-Agent': ['PostmanRuntime/7.32.3'],
            Accept: ['*/*'],
            'Postman-Token': ['c8f220d4-71c3-4893-881b-07f350bb60e0'],
            Host: ['localhost:3000'],
            'Accept-Encoding': ['gzip, deflate, br'],
            Connection: ['keep-alive'],
            'Content-Length': ['157']
        },
        multiValueQueryStringParameters: null,
        path: '/v2/tokens',
        pathParameters: null,
        queryStringParameters: null,
        requestContext: {
            accountId: 'offlineContext_accountId',
            apiId: 'offlineContext_apiId',
            authorizer: {
                claims: undefined,
                principalId: 'offlineContext_authorizer_principalId',
                scopes: undefined
            },
            domainName: 'offlineContext_domainName',
            domainPrefix: 'offlineContext_domainPrefix',
            extendedRequestId: 'e72c8bc9-1e45-4f75-baaa-3b1417264b31',
            httpMethod: 'POST',
            identity: {
                accessKey: null,
                accountId: 'offlineContext_accountId',
                apiKey: 'offlineContext_apiKey',
                apiKeyId: 'offlineContext_apiKeyId',
                caller: 'offlineContext_caller',
                cognitoAuthenticationProvider: 'offlineContext_cognitoAuthenticationProvider',
                cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
                cognitoIdentityId: 'offlineContext_cognitoIdentityId',
                cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
                principalOrgId: null,
                sourceIp: '::1',
                user: 'offlineContext_user',
                userAgent: 'PostmanRuntime/7.32.3',
                userArn: 'offlineContext_userArn'
            },
            operationName: undefined,
            path: '/v2/tokens',
            protocol: 'HTTP/1.1',
            requestId: '835c6d7d-6324-4bab-b31b-0de7af42c8dd',
            requestTime: '23/Sep/2023:23:23:46 -0500',
            requestTimeEpoch: 1695529426460,
            resourceId: 'offlineContext_resourceId',
            resourcePath: '/DESA/v2/tokens',
            stage: 'DESA'
        },
        resource: '/v2/tokens',
        stageVariables: null
    }
};