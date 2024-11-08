import { Controller } from '@nestjs/common';
import { VipService } from './vip.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('付费权益')
@Controller('vip')
export class VipController {
  constructor(private readonly vipService: VipService) { }
}
