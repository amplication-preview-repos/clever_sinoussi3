import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductionQueueServiceBase } from "./base/productionQueue.service.base";

@Injectable()
export class ProductionQueueService extends ProductionQueueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
