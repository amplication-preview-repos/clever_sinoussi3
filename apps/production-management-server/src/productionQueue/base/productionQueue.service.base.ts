/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  ProductionQueue as PrismaProductionQueue,
  ProductionOrder as PrismaProductionOrder,
} from "@prisma/client";

export class ProductionQueueServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProductionQueueCountArgs, "select">
  ): Promise<number> {
    return this.prisma.productionQueue.count(args);
  }

  async productionQueues<T extends Prisma.ProductionQueueFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductionQueueFindManyArgs>
  ): Promise<PrismaProductionQueue[]> {
    return this.prisma.productionQueue.findMany<Prisma.ProductionQueueFindManyArgs>(
      args
    );
  }
  async productionQueue<T extends Prisma.ProductionQueueFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductionQueueFindUniqueArgs>
  ): Promise<PrismaProductionQueue | null> {
    return this.prisma.productionQueue.findUnique(args);
  }
  async createProductionQueue<T extends Prisma.ProductionQueueCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductionQueueCreateArgs>
  ): Promise<PrismaProductionQueue> {
    return this.prisma.productionQueue.create<T>(args);
  }
  async updateProductionQueue<T extends Prisma.ProductionQueueUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductionQueueUpdateArgs>
  ): Promise<PrismaProductionQueue> {
    return this.prisma.productionQueue.update<T>(args);
  }
  async deleteProductionQueue<T extends Prisma.ProductionQueueDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductionQueueDeleteArgs>
  ): Promise<PrismaProductionQueue> {
    return this.prisma.productionQueue.delete(args);
  }

  async getProductionOrder(
    parentId: string
  ): Promise<PrismaProductionOrder | null> {
    return this.prisma.productionQueue
      .findUnique({
        where: { id: parentId },
      })
      .productionOrder();
  }
}