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
import type { Catalog } from '../models/Catalog.js';
import type { CatalogLdp } from '../models/CatalogLdp.js';
import type { dateTimeStampValue } from '../models/dateTimeStampValue.js';
import type { infomodelVersion } from '../models/infomodelVersion.js';
import type { ResourceJsonLd } from '../models/ResourceJsonLd.js';

import type { CancelablePromise } from '../core/CancelablePromise.js';
import { request as __request } from '../core/request.js';
import { OpenAPIConfig } from '../index.js';

export class CatalogService {
    private OpenAPI: OpenAPIConfig;
    constructor(endpointConfig: OpenAPIConfig) {
      this.OpenAPI = endpointConfig;
    }

    /**
     * Read the Catalog
     * Read the catalog of all registered IDS Resources.
     * @param idsIssuerConnector Origin Connector of the message.
     * @param idsSenderAgent foaf:Agent, which initiated the message.
     * @param idsRecipientAgent foaf:Agent, for which the message is intended.
     * @param idsSecurityToken The IDS DAT: Token representing ids security claims, for instance that the sender supports a certain security profile.
     * @param idsModelVersion Information Model version, against which the Message should be interpreted
     * @param idsIssued Date of issuing the request.
     * @param idsCorrelationMessage Correlated message. Usually needed, if a messages responds to a previous message, A Connector may, e.g., send a MessageProcessedNotification as a response to an incoming message and therefore needs this property to refer to the incoming message.
     * @param idsRecipientConnector Target Connector, mainly used in broadcasting scenarios.
     * @param idsAuthorizationToken Authorization token as required by the target connector.
     * @param idsTransferContract Contract which is (or will be) the legal basis of the data transfer.
     * @param idsContentVersion Version of the content in the payload.
     * @returns CatalogLdp OK
     * @throws ApiError
     */
    public  getCatalog(
        idsIssuerConnector: anyUri,
        idsSenderAgent: anyUri,
        idsRecipientAgent: anyUri,
        idsSecurityToken: string,
        idsModelVersion?: infomodelVersion,
        idsIssued?: dateTimeStampValue,
        idsCorrelationMessage?: anyUri,
        idsRecipientConnector?: anyUri,
        idsAuthorizationToken?: string,
        idsTransferContract?: anyUri,
        idsContentVersion?: string,
    ): CancelablePromise<CatalogLdp> {
        return __request(this.OpenAPI, {
            method: 'GET',
            url: '/Catalog',
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
                403: `Forbidden. Access is not allowed for this user. Recheck your Dynamic Attribute Token (DAT) and all other required authentication patterns used.`,
            },
        });
    }

    /**
     * Request the Headers
     * @param idsIssuerConnector Origin Connector of the message.
     * @param idsSenderAgent foaf:Agent, which initiated the message.
     * @param idsRecipientAgent foaf:Agent, for which the message is intended.
     * @param idsSecurityToken The IDS DAT: Token representing ids security claims, for instance that the sender supports a certain security profile.
     * @param idsModelVersion Information Model version, against which the Message should be interpreted
     * @param idsIssued Date of issuing the request.
     * @param idsCorrelationMessage Correlated message. Usually needed, if a messages responds to a previous message, A Connector may, e.g., send a MessageProcessedNotification as a response to an incoming message and therefore needs this property to refer to the incoming message.
     * @param idsRecipientConnector Target Connector, mainly used in broadcasting scenarios.
     * @param idsAuthorizationToken Authorization token as required by the target connector.
     * @param idsTransferContract Contract which is (or will be) the legal basis of the data transfer.
     * @param idsContentVersion Version of the content in the payload.
     * @returns string OK
     * @throws ApiError
     */
    public  headCatalog(
        idsIssuerConnector: anyUri,
        idsSenderAgent: anyUri,
        idsRecipientAgent: anyUri,
        idsSecurityToken: string,
        idsModelVersion?: infomodelVersion,
        idsIssued?: dateTimeStampValue,
        idsCorrelationMessage?: anyUri,
        idsRecipientConnector?: anyUri,
        idsAuthorizationToken?: string,
        idsTransferContract?: anyUri,
        idsContentVersion?: string,
    ): CancelablePromise<string> {
        return __request(this.OpenAPI, {
            method: 'HEAD',
            url: '/Catalog',
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
                403: `Forbidden. Access is not allowed for this user. Recheck your Dynamic Attribute Token (DAT) and all other required authentication patterns used.`,
            },
        });
    }

    /**
     * Read the allowed operations
     * Request the allowed operations on this IDS Catalog instance.
     * @param idsIssuerConnector Origin Connector of the message.
     * @param idsSenderAgent foaf:Agent, which initiated the message.
     * @param idsRecipientAgent foaf:Agent, for which the message is intended.
     * @param idsSecurityToken The IDS DAT: Token representing ids security claims, for instance that the sender supports a certain security profile.
     * @param idsModelVersion Information Model version, against which the Message should be interpreted
     * @param idsIssued Date of issuing the request.
     * @param idsCorrelationMessage Correlated message. Usually needed, if a messages responds to a previous message, A Connector may, e.g., send a MessageProcessedNotification as a response to an incoming message and therefore needs this property to refer to the incoming message.
     * @param idsRecipientConnector Target Connector, mainly used in broadcasting scenarios.
     * @param idsAuthorizationToken Authorization token as required by the target connector.
     * @param idsTransferContract Contract which is (or will be) the legal basis of the data transfer.
     * @param idsContentVersion Version of the content in the payload.
     * @returns string Returns the allowed operations on this IDS Catalog instance.
     * @throws ApiError
     */
    public  optionsCatalog(
        idsIssuerConnector: anyUri,
        idsSenderAgent: anyUri,
        idsRecipientAgent: anyUri,
        idsSecurityToken: string,
        idsModelVersion?: infomodelVersion,
        idsIssued?: dateTimeStampValue,
        idsCorrelationMessage?: anyUri,
        idsRecipientConnector?: anyUri,
        idsAuthorizationToken?: string,
        idsTransferContract?: anyUri,
        idsContentVersion?: string,
    ): CancelablePromise<string> {
        return __request(this.OpenAPI, {
            method: 'OPTIONS',
            url: '/Catalog',
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
                403: `Forbidden. Access is not allowed for this user. Recheck your Dynamic Attribute Token (DAT) and all other required authentication patterns used.`,
            },
        });
    }

    /**
     * Update the Catalog
     * Overwrite the current catalog with a complete new one.
     * @param idsIssuerConnector Origin Connector of the message.
     * @param idsSenderAgent foaf:Agent, which initiated the message.
     * @param idsRecipientAgent foaf:Agent, for which the message is intended.
     * @param idsSecurityToken The IDS DAT: Token representing ids security claims, for instance that the sender supports a certain security profile.
     * @param ifMatch Only perform the action if the client supplied entity matches the same entity on the server.
     * @param requestBody A complete IDS Catalog instance with all downstream resources.
     * @param idsModelVersion Information Model version, against which the Message should be interpreted
     * @param idsIssued Date of issuing the request.
     * @param idsCorrelationMessage Correlated message. Usually needed, if a messages responds to a previous message, A Connector may, e.g., send a MessageProcessedNotification as a response to an incoming message and therefore needs this property to refer to the incoming message.
     * @param idsRecipientConnector Target Connector, mainly used in broadcasting scenarios.
     * @param idsAuthorizationToken Authorization token as required by the target connector.
     * @param idsTransferContract Contract which is (or will be) the legal basis of the data transfer.
     * @param idsContentVersion Version of the content in the payload.
     * @returns CatalogLdp successful
     * @throws ApiError
     */
    public  putCatalog(
        idsIssuerConnector: anyUri,
        idsSenderAgent: anyUri,
        idsRecipientAgent: anyUri,
        idsSecurityToken: string,
        ifMatch: string,
        requestBody: Catalog,
        idsModelVersion?: infomodelVersion,
        idsIssued?: dateTimeStampValue,
        idsCorrelationMessage?: anyUri,
        idsRecipientConnector?: anyUri,
        idsAuthorizationToken?: string,
        idsTransferContract?: anyUri,
        idsContentVersion?: string,
    ): CancelablePromise<CatalogLdp> {
        return __request(this.OpenAPI, {
            method: 'PUT',
            url: '/Catalog',
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
                'If-Match': ifMatch,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                409: `Conflict`,
            },
        });
    }

    /**
     * Update a Catalog entry
     * Update a sinlge instance of IDS Resource in the Catalog. In case the Resource is unknown to the Catalog, a new IDS Resource is added.
     * @param idsIssuerConnector Origin Connector of the message.
     * @param idsSenderAgent foaf:Agent, which initiated the message.
     * @param idsRecipientAgent foaf:Agent, for which the message is intended.
     * @param idsSecurityToken The IDS DAT: Token representing ids security claims, for instance that the sender supports a certain security profile.
     * @param slug The intended path name of the new resource.
     * @param requestBody A single IDS Resource instance with all downstream resources.
     * @param idsModelVersion Information Model version, against which the Message should be interpreted
     * @param idsIssued Date of issuing the request.
     * @param idsCorrelationMessage Correlated message. Usually needed, if a messages responds to a previous message, A Connector may, e.g., send a MessageProcessedNotification as a response to an incoming message and therefore needs this property to refer to the incoming message.
     * @param idsRecipientConnector Target Connector, mainly used in broadcasting scenarios.
     * @param idsAuthorizationToken Authorization token as required by the target connector.
     * @param idsTransferContract Contract which is (or will be) the legal basis of the data transfer.
     * @param idsContentVersion Version of the content in the payload.
     * @returns CatalogLdp successful
     * @throws ApiError
     */
    public  patchCatalog(
        idsIssuerConnector: anyUri,
        idsSenderAgent: anyUri,
        idsRecipientAgent: anyUri,
        idsSecurityToken: string,
        slug: string,
        requestBody: ResourceJsonLd,
        idsModelVersion?: infomodelVersion,
        idsIssued?: dateTimeStampValue,
        idsCorrelationMessage?: anyUri,
        idsRecipientConnector?: anyUri,
        idsAuthorizationToken?: string,
        idsTransferContract?: anyUri,
        idsContentVersion?: string,
    ): CancelablePromise<CatalogLdp> {
        return __request(this.OpenAPI, {
            method: 'PATCH',
            url: '/Catalog',
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
                'Slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                409: `Conflict`,
            },
        });
    }

    /**
     * Create a new Catalog entry
     * Add a sinlge instance of IDS Resource in the Catalog.
     * @param idsIssuerConnector Origin Connector of the message.
     * @param idsSenderAgent foaf:Agent, which initiated the message.
     * @param idsRecipientAgent foaf:Agent, for which the message is intended.
     * @param idsSecurityToken The IDS DAT: Token representing ids security claims, for instance that the sender supports a certain security profile.
     * @param slug The intended path name of the new resource.
     * @param requestBody A single IDS Resource instance with all downstream resources.
     * @param idsModelVersion Information Model version, against which the Message should be interpreted
     * @param idsIssued Date of issuing the request.
     * @param idsCorrelationMessage Correlated message. Usually needed, if a messages responds to a previous message, A Connector may, e.g., send a MessageProcessedNotification as a response to an incoming message and therefore needs this property to refer to the incoming message.
     * @param idsRecipientConnector Target Connector, mainly used in broadcasting scenarios.
     * @param idsAuthorizationToken Authorization token as required by the target connector.
     * @param idsTransferContract Contract which is (or will be) the legal basis of the data transfer.
     * @param idsContentVersion Version of the content in the payload.
     * @returns CatalogLdp Created
     * @throws ApiError
     */
    public  postCatalog(
        idsIssuerConnector: anyUri,
        idsSenderAgent: anyUri,
        idsRecipientAgent: anyUri,
        idsSecurityToken: string,
        slug: string,
        requestBody: ResourceJsonLd,
        idsModelVersion?: infomodelVersion,
        idsIssued?: dateTimeStampValue,
        idsCorrelationMessage?: anyUri,
        idsRecipientConnector?: anyUri,
        idsAuthorizationToken?: string,
        idsTransferContract?: anyUri,
        idsContentVersion?: string,
    ): CancelablePromise<CatalogLdp> {
        return __request(this.OpenAPI, {
            method: 'POST',
            url: '/Catalog',
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
                'Slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
                409: `Conflict`,
            },
        });
    }

}
