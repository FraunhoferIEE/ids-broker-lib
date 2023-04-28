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
import {OpenAPIConfig} from './core/OpenAPI.js';
import {ArtifactsService} from './services/ArtifactsService.js';
import {BrokerService} from './services/BrokerService.js';
import {CatalogService} from './services/CatalogService.js';
import {ContractsService} from './services/ContractsService.js';
import {FilesService} from './services/FilesService.js';
import {HumanUserService} from './services/HumanUserService.js';
import {MultipartInteractionsService} from './services/MultipartInteractionsService.js';
import {RepresentationService} from './services/RepresentationService.js';
import {ResourceService} from './services/ResourceService.js';
export {OpenAPIConfig} from './core/OpenAPI.js';

export class IDSBroker {
  artifactsService: ArtifactsService;
  brokerService: BrokerService;
  catalogService: CatalogService;
  contractsService: ContractsService;
  filesService: FilesService;
  humanUserService: HumanUserService;
  multipartInteractionsService: MultipartInteractionsService;
  representationService: RepresentationService;
  resourceService: ResourceService;

  constructor(endpointUrl: string, username: string, password: string) {
    const endpointConfig: OpenAPIConfig = {
      BASE: endpointUrl,
      VERSION: '1.3.0',
      WITH_CREDENTIALS: true,
      CREDENTIALS: 'include',
      TOKEN: undefined,
      USERNAME: username,
      PASSWORD: password,
      HEADERS: undefined,
      ENCODE_PATH: undefined,
    };
    this.artifactsService = new ArtifactsService(endpointConfig);
    this.brokerService = new BrokerService(endpointConfig);
    this.catalogService = new CatalogService(endpointConfig);
    this.contractsService = new ContractsService(endpointConfig);
    this.filesService = new FilesService(endpointConfig);
    this.humanUserService = new HumanUserService(endpointConfig);
    this.multipartInteractionsService = new MultipartInteractionsService(
      endpointConfig
    );
    this.representationService = new RepresentationService(endpointConfig);
    this.resourceService = new ResourceService(endpointConfig);
  }
}
