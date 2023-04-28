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

import type { dateTimeStamp } from './dateTimeStamp.js';
import type { IdentifiedEntity } from './IdentifiedEntity.js';
import type { LdpContainerClass } from './LdpContainerClass.js';
import type { Representation } from './Representation.js';

export type Resource = (IdentifiedEntity & {
    '@type'?: Array<(string & LdpContainerClass)>;
    'ids:sample'?: string;
    'ids:resourcePart'?: Array<Resource>;
    'ids:description'?: string;
    'ids:title'?: string;
    'ids:comment'?: string;
    'ids:contentRefinement'?: string;
    'ids:keyword'?: Array<string>;
    'ids:temporalCoverage'?: {
        'ids:beginning'?: dateTimeStamp;
        'ids:end'?: dateTimeStamp;
    };
    'ids:spatialCoverage'?: Resource;
    'ids:theme'?: Resource;
    'ids:language'?: {
        '@id'?: string;
    };
    'ids:contractOffer'?: Array<Resource>;
    'ldp:contains'?: Array<Resource>;
    'ids:defaultRepresentation'?: Array<Representation>;
    'ids:representation'?: Array<Representation>;
});

