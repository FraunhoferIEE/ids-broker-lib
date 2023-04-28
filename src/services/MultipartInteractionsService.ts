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
import type { dateTimeStamp } from '../models/dateTimeStamp.js';
import type { infomodelVersion } from '../models/infomodelVersion.js';
import type { infomodelVersionArray } from '../models/infomodelVersionArray.js';
import type { RejectionCodes } from '../models/RejectionCodes.js';
import type { URI } from '../models/URI.js';

import type { CancelablePromise } from '../core/CancelablePromise.js';
import { request as __request } from '../core/request.js';
import { OpenAPIConfig } from '../index.js';

export class MultipartInteractionsService {
    private OpenAPI: OpenAPIConfig;
    constructor(endpointConfig: OpenAPIConfig) {
      this.OpenAPI = endpointConfig;
    }

    /**
     * Infrastructure related IDS Multipart Message endpoint.
     * This endpoint serves as the main interaction point for onboarding and updating of metadata at the broker. Most probably the relevant messages are ConnectorAvailableMessage, ConnectorUnavailableMessage, ConnectorInactiveMessage, ConnectorUpdateMessage, ResourceAvailableMessage, ResourceUnavailableMessage, ResourceUpdateMessage.
     * @param formData
     * @returns any The message was received and processed. Note that this only means that the HTTP interaction worked fine but higher-level errors (no content, wrong authentication, usage not permitted and so on) are announced in the Multipart response message. Note that the Multipart object below is only an example and does *not* represent the schema itself! Check the IDS Information Model for more information on valid IDS ResponseMessages.
     * @throws ApiError
     */
    public  postInfrastructure(
        formData?: {
            /**
             * The Multipart Header section contains the IDS Message isntance.
             */
            header?: {
                '@context'?: string;
                '@type'?: string;
                '@id'?: string;
                modelVersion?: infomodelVersion;
                issued?: dateTimeStamp;
                issuerConnector?: URI;
                securityToken?: {
                    '@type'?: string;
                    tokenValue?: string;
                    tokenFormat?: {
                        '@id'?: string;
                    };
                };
            };
            /**
             * The Payload corresponding to the IDS Message defined in the Multipart Header section. Can be an IDS Object in RDF (JSON-LD), a query (e.g. SPARQL) or any other suitable data format.
             */
            payload?: {
                '@context'?: string;
                '@type'?: string;
                '@id'?: string;
                defaultHost?: {
                    '@type'?: any;
                    '@id'?: string;
                    protocol?: {
                        '@id'?: string;
                    };
                    accessUrl?: {
                        '@id'?: string;
                    };
                };
                curator?: {
                    '@id'?: string;
                };
                maintainer?: {
                    '@id'?: string;
                };
                inboundModelVersion?: infomodelVersionArray;
                outboundModelVersion?: infomodelVersion;
                catalog?: {
                    '@type'?: string;
                    '@id'?: string;
                    offer?: Array<{
                        '@type'?: string;
                        '@id'?: string;
                        title?: Array<{
                            '@value'?: string;
                            '@language'?: string;
                        }>;
                        description?: Array<{
                            '@value'?: string;
                            '@language'?: string;
                        }>;
                    }>;
                };
            };
        },
    ): CancelablePromise<{
        header?: {
            '@context'?: string;
            '@type'?: string;
            '@id'?: string;
            modelVersion?: infomodelVersion;
            issued?: dateTimeStamp;
            issuerConnector?: URI;
            securityToken?: {
                '@type'?: string;
                tokenValue?: string;
                tokenFormat?: {
                    '@id'?: string;
                };
            };
            rejectionReason?: RejectionCodes;
        };
        payload?: string;
    }> {
        return __request(this.OpenAPI, {
            method: 'POST',
            url: '/infrastructure',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Content-related interactions with the indexed data, mainly QueryMessage and DescriptionRequestMessage
     * @param formData
     * @returns any The message was received and processed. Note that this only means that the HTTP interaction worked fine but higher-level errors (no content, wrong authentication, usage not permitted and so on) are announced in the Multipart response message.
     * @throws ApiError
     */
    public  postData(
        formData?: {
            /**
             * The Multipart Header section contains the IDS Message instance.
             */
            header?: {
                '@context'?: string;
                '@type'?: string;
                '@id'?: string;
                modelVersion?: infomodelVersion;
                issued?: dateTimeStamp;
                issuerConnector?: URI;
                securityToken?: {
                    '@type'?: string;
                    tokenValue?: string;
                    tokenFormat?: {
                        '@id'?: string;
                    };
                };
                requestedArtifact?: URI;
            };
            /**
             * The Payload corresponding to the IDS Message defined in the Multipart Header section. Can be an IDS Object in RDF (JSON-LD), a query (e.g. SPARQL) or any other suitable data format.
             */
            payload?: any;
        },
    ): CancelablePromise<{
        header?: {
            '@context'?: string;
            '@type'?: string;
            '@id'?: string;
            modelVersion?: infomodelVersion;
            issued?: dateTimeStamp;
            issuerConnector?: URI;
            securityToken?: {
                '@type'?: string;
                tokenValue?: string;
                tokenFormat?: {
                    '@id'?: string;
                };
            };
            rejectionReason?: RejectionCodes;
        };
        payload?: string;
    }> {
        return __request(this.OpenAPI, {
            method: 'POST',
            url: '/data',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
