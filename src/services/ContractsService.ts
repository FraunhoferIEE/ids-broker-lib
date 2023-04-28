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
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { request as __request } from '../core/request.js';
import { OpenAPIConfig } from '../index.js';

export class ContractsService {
    private OpenAPI: OpenAPIConfig;
    constructor(endpointConfig: OpenAPIConfig) {
      this.OpenAPI = endpointConfig;
    }

    /**
     * todo
     * @param resourceId todo
     * @param contractId todo
     * @returns any todo
     * @throws ApiError
     */
    public  getCatalog(
        resourceId: string,
        contractId: string,
    ): CancelablePromise<any> {
        return __request(this.OpenAPI, {
            method: 'GET',
            url: '/Catalog/{resource-id}/{contract-id}',
            path: {
                'resource-id': resourceId,
                'contract-id': contractId,
            },
        });
    }

}
