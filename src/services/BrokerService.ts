/*
 * Copyright 2023 Fraunhofer IEE
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Contributors:
 *       Michel Otto - initial implementation
 *
 */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { anyUri } from '../models/anyUri.js';
import type { BrokerJsonLd } from '../models/BrokerJsonLd.js';
import type { dateTimeStampValue } from '../models/dateTimeStampValue.js';
import type { infomodelVersion } from '../models/infomodelVersion.js';

import type { CancelablePromise } from '../core/CancelablePromise.js';
import { request as __request } from '../core/request.js';
import { OpenAPIConfig } from '../index.js';

export class BrokerService {
    private OpenAPI: OpenAPIConfig;
    constructor(endpointConfig: OpenAPIConfig) {
      this.OpenAPI = endpointConfig;
    }

    /**
     * Metadata Broker's Self-Description
     * Request the Metadata Broker's Self-Description in JSON-LD.
     * @param idsSecurityToken The IDS DAT: Token representing ids security claims, for instance that the sender supports a certain security profile.
     * @param idsModelVersion Information Model version, against which the Message should be interpreted
     * @param idsIssued Date of issuing the request.
     * @param idsCorrelationMessage Correlated message. Usually needed, if a messages responds to a previous message, A Connector may, e.g., send a MessageProcessedNotification as a response to an incoming message and therefore needs this property to refer to the incoming message.
     * @param idsIssuerConnector Origin Connector of the message.
     * @param idsRecipientConnector Target Connector, mainly used in broadcasting scenarios.
     * @param idsSenderAgent foaf:Agent, which initiated the message.
     * @param idsRecipientAgent foaf:Agent, for which the message is intended.
     * @param idsAuthorizationToken Authorization token as required by the target connector.
     * @param idsTransferContract Contract which is (or will be) the legal basis of the data transfer.
     * @param idsContentVersion Version of the content in the payload.
     * @returns BrokerJsonLd The Self-Description of this IDS Metadata Broker in JSON-LD.
     * @throws ApiError
     */
    public  get(
        idsSecurityToken: string,
        idsModelVersion?: infomodelVersion,
        idsIssued?: dateTimeStampValue,
        idsCorrelationMessage?: anyUri,
        idsIssuerConnector?: anyUri,
        idsRecipientConnector?: anyUri,
        idsSenderAgent?: anyUri,
        idsRecipientAgent?: anyUri,
        idsAuthorizationToken?: string,
        idsTransferContract?: anyUri,
        idsContentVersion?: string,
    ): CancelablePromise<BrokerJsonLd> {
        return __request(this.OpenAPI, {
            method: 'GET',
            url: '/',
            headers: {
                'ids-modelVersion': idsModelVersion,
                'ids-issued': idsIssued,
                'ids-correlationMessage': idsCorrelationMessage,
                'ids-issuerConnector': idsIssuerConnector,
                'ids-recipientConnector': idsRecipientConnector,
                'ids-senderAgent': idsSenderAgent,
                'ids-recipientAgent': idsRecipientAgent,
                'ids-securityToken': idsSecurityToken,
                'ids-authorizationToken': idsAuthorizationToken,
                'ids-transferContract': idsTransferContract,
                'ids-contentVersion': idsContentVersion,
            },
            errors: {
                403: `Forbidden. Check your DAT in the 'ids-securityToken' Header.`,
            },
        });
    }

    /**
     * Metadata Broker's Header
     * Request the Metadata Broker's Header information.
     * @param idsSecurityToken The IDS DAT: Token representing ids security claims, for instance that the sender supports a certain security profile.
     * @param idsModelVersion Information Model version, against which the Message should be interpreted
     * @param idsIssued Date of issuing the request.
     * @param idsCorrelationMessage Correlated message. Usually needed, if a messages responds to a previous message, A Connector may, e.g., send a MessageProcessedNotification as a response to an incoming message and therefore needs this property to refer to the incoming message.
     * @param idsIssuerConnector Origin Connector of the message.
     * @param idsRecipientConnector Target Connector, mainly used in broadcasting scenarios.
     * @param idsSenderAgent foaf:Agent, which initiated the message.
     * @param idsRecipientAgent foaf:Agent, for which the message is intended.
     * @param idsAuthorizationToken Authorization token as required by the target connector.
     * @param idsTransferContract Contract which is (or will be) the legal basis of the data transfer.
     * @param idsContentVersion Version of the content in the payload.
     * @returns string OK
     * @throws ApiError
     */
    public  head(
        idsSecurityToken: string,
        idsModelVersion?: infomodelVersion,
        idsIssued?: dateTimeStampValue,
        idsCorrelationMessage?: anyUri,
        idsIssuerConnector?: anyUri,
        idsRecipientConnector?: anyUri,
        idsSenderAgent?: anyUri,
        idsRecipientAgent?: anyUri,
        idsAuthorizationToken?: string,
        idsTransferContract?: anyUri,
        idsContentVersion?: string,
    ): CancelablePromise<string> {
        return __request(this.OpenAPI, {
            method: 'HEAD',
            url: '/',
            headers: {
                'ids-modelVersion': idsModelVersion,
                'ids-issued': idsIssued,
                'ids-correlationMessage': idsCorrelationMessage,
                'ids-issuerConnector': idsIssuerConnector,
                'ids-recipientConnector': idsRecipientConnector,
                'ids-senderAgent': idsSenderAgent,
                'ids-recipientAgent': idsRecipientAgent,
                'ids-securityToken': idsSecurityToken,
                'ids-authorizationToken': idsAuthorizationToken,
                'ids-transferContract': idsTransferContract,
                'ids-contentVersion': idsContentVersion,
            },
            responseHeader: 'ids-modelVersion',
            errors: {
                401: `Unauthorized. Check your DAT in the 'ids-securityToken' Header.`,
            },
        });
    }

    /**
     * Metadata Broker's allowed operations
     * Request the HTTP operations allowed on this IDS Metadata Broker.
     * @param idsSecurityToken The IDS DAT: Token representing ids security claims, for instance that the sender supports a certain security profile.
     * @param idsModelVersion Information Model version, against which the Message should be interpreted
     * @param idsIssued Date of issuing the request.
     * @param idsCorrelationMessage Correlated message. Usually needed, if a messages responds to a previous message, A Connector may, e.g., send a MessageProcessedNotification as a response to an incoming message and therefore needs this property to refer to the incoming message.
     * @param idsIssuerConnector Origin Connector of the message.
     * @param idsRecipientConnector Target Connector, mainly used in broadcasting scenarios.
     * @param idsSenderAgent foaf:Agent, which initiated the message.
     * @param idsRecipientAgent foaf:Agent, for which the message is intended.
     * @param idsAuthorizationToken Authorization token as required by the target connector.
     * @param idsTransferContract Contract which is (or will be) the legal basis of the data transfer.
     * @param idsContentVersion Version of the content in the payload.
     * @returns string OK
     * @throws ApiError
     */
    public  options(
        idsSecurityToken: string,
        idsModelVersion?: infomodelVersion,
        idsIssued?: dateTimeStampValue,
        idsCorrelationMessage?: anyUri,
        idsIssuerConnector?: anyUri,
        idsRecipientConnector?: anyUri,
        idsSenderAgent?: anyUri,
        idsRecipientAgent?: anyUri,
        idsAuthorizationToken?: string,
        idsTransferContract?: anyUri,
        idsContentVersion?: string,
    ): CancelablePromise<string> {
        return __request(this.OpenAPI, {
            method: 'OPTIONS',
            url: '/',
            headers: {
                'ids-modelVersion': idsModelVersion,
                'ids-issued': idsIssued,
                'ids-correlationMessage': idsCorrelationMessage,
                'ids-issuerConnector': idsIssuerConnector,
                'ids-recipientConnector': idsRecipientConnector,
                'ids-senderAgent': idsSenderAgent,
                'ids-recipientAgent': idsRecipientAgent,
                'ids-securityToken': idsSecurityToken,
                'ids-authorizationToken': idsAuthorizationToken,
                'ids-transferContract': idsTransferContract,
                'ids-contentVersion': idsContentVersion,
            },
            responseHeader: 'ids-modelVersion',
            errors: {
                403: `Forbidden. Check your DAT in the 'ids-securityToken' Header.`,
            },
        });
    }

}
