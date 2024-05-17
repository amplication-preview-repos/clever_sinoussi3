import { Module } from "@nestjs/common";
import { MaterialModuleBase } from "./base/material.module.base";
import { MaterialService } from "./material.service";
import { MaterialController } from "./material.controller";
import { MaterialResolver } from "./material.resolver";

@Module({
  imports: [MaterialModuleBase],
  controllers: [MaterialController],
  providers: [MaterialService, MaterialResolver],
  exports: [MaterialService],
})
export class MaterialModule {}
