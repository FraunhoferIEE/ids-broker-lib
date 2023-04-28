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

export enum RejectionCodes {
    IDSC_NOT_FOUND = 'idsc:NOT_FOUND',
    IDSC_NOT_AUTHENTICATED = 'idsc:NOT_AUTHENTICATED',
    IDSC_NOT_AUTHORIZED = 'idsc:NOT_AUTHORIZED',
    IDSC_TOO_MANY_RESULTS = 'idsc:TOO_MANY_RESULTS',
    IDSC_MALFORMED_MESSAGE = 'idsc:MALFORMED_MESSAGE',
    IDSC_INTERNAL_RECIPIENT_ERROR = 'idsc:INTERNAL_RECIPIENT_ERROR',
    IDSC_METHOD_NOT_SUPPORTED = 'idsc:METHOD_NOT_SUPPORTED',
    IDSC_MESSAGE_TYPE_NOT_SUPPORTED = 'idsc:MESSAGE_TYPE_NOT_SUPPORTED',
    IDSC_VERSION_NOT_SUPPORTED = 'idsc:VERSION_NOT_SUPPORTED',
    IDSC_BAD_PARAMETERS = 'idsc:BAD_PARAMETERS',
    IDSC_TEMPORARILY_NOT_AVAILABLE = 'idsc:TEMPORARILY_NOT_AVAILABLE',
}
