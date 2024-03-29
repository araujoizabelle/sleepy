import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { DatabaseModule, LoggerModule } from '@app/soupy';
import { ReservationsRepository } from './reservations.repository';
import { ReservationDocument, ReservationSchema } from './entities/reservation.schema';
@Module({
  imports: [
    DatabaseModule, 
    DatabaseModule.forFeature([
      { name: ReservationDocument.name, schema: ReservationSchema }
    ]),
    LoggerModule,
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRepository]
})
export class ReservationsModule {}
