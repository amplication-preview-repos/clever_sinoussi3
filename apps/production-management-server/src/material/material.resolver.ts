import * as graphql from "@nestjs/graphql";
import { MaterialResolverBase } from "./base/material.resolver.base";
import { Material } from "./base/Material";
import { MaterialService } from "./material.service";

@graphql.Resolver(() => Material)
export class MaterialResolver extends MaterialResolverBase {
  constructor(protected readonly service: MaterialService) {
    super(service);
  }
}
