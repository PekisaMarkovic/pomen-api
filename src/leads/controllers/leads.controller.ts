import {
  Body,
  Controller,
  HttpStatus,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { LeadsService } from '@/leads/services/leads.service';
import { Public } from '@/auth/decorators';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Lead } from '@/leads/entities/lead.entity';
import { CreateLeadDto } from '@/leads/dto';

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Public()
  @Post()
  @ApiOperation({ summary: 'Create a new lead' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The lead has been successfully created.',
    type: Lead,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if user/cemetery is not found.',
    type: NotFoundException,
  })
  createCertificate(@Body() body: CreateLeadDto) {
    return this.leadsService.createLead(body);
  }
}
