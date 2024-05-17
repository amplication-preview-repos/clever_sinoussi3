import { Module } from "@nestjs/common";
import { ProductionOrderModuleBase } from "./base/productionOrder.module.base";
import { ProductionOrderService } from "./productionOrder.service";
import { ProductionOrderController } from "./productionOrder.controller";
import { ProductionOrderResolver } from "./productionOrder.resolver";

@Module({
  imports: [ProductionOrderModuleBase],
  controllers: [ProductionOrderController],
  providers: [ProductionOrderService, ProductionOrderResolver],
  exports: [ProductionOrderService],
})
export class ProductionOrderModule {}
