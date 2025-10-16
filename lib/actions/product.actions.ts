"use server";

import { PrismaClient } from "@/lib/generated/prisma";
// import {prisma} from '../../app/(root)/db/prisma';
import { convertToJsObject } from '../utils';
import { LATEST_PRODUCTS_LIMITS } from '../constants';

const prisma = new PrismaClient();

export async function getLatestProducts(){

    const data = await prisma.product.findMany({

        take: LATEST_PRODUCTS_LIMITS,
        orderBy: {createdAt: 'desc'},
    });

    return convertToJsObject(data);
}

//fetch single item by the provided slug
export async function getProductBySlug(slug: string){

    return await prisma.product.findFirst({
        where: {slug: slug},
    })
}

