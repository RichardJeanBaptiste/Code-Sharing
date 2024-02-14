import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { codeSnippet } from "../Schemas";
import 'dotenv/config';


export async function POST(request: Request){
    try {
        let mongo_uri:string | undefined = process.env.MONGO_URI;

        if(mongo_uri != undefined){
            await mongoose.connect(mongo_uri);
        }
       
        let data = await request.json();

        let query = await codeSnippet.findOne({id: data.id}).then((docs) => {
            return docs;
        })

        return NextResponse.json(query, {status: 200});

    } catch (error) {
        
        console.log(error);
        return NextResponse.json({msg: "Server Error :("}, {status: 500});
    }
}
