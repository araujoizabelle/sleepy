import { AbstractDocument } from "@app/soupy";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey: false})
export class ReservationDocument extends AbstractDocument {
    @Prop()
    createdAt: Date;
    
    @Prop()
    startDate: Date;
    
    @Prop()
    endDate: Date;
    
    @Prop()
    userId: string;
    
    @Prop()
    placeId: string;

    @Prop()
    invoiceId: string;
}

export const ReservationSchema = SchemaFactory.createForClass(ReservationDocument);