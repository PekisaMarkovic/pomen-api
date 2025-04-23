import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { LeadsService } from '@/leads/services/leads.service';
import { Public } from '@/auth/decorators';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Lead } from '@/leads/entities/lead.entity';
import { CreateLeadDto, UpdateLadStatusDto } from '@/leads/dto';
import { SearchLeadDto } from '@/leads/dto/search-lead.dto';

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

  @Public()
  @Get()
  @ApiOperation({ summary: 'Get all leads paginated' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all leads.',
    type: [Lead],
  })
  getGetherings(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ) {
    limit = limit > 100 ? 100 : limit;

    return this.leadsService.getLeads({
      page,
      limit,
    });
  }

  @Public()
  @Get(':id')
  @ApiOperation({ summary: 'Get a Lead by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the Lead.',
    type: Lead,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throw exception if the Lead is not found',
    type: NotFoundException,
  })
  getGetheringById(@Param('id', ParseIntPipe) id: number) {
    return this.leadsService.getLeadById(id);
  }

  @Public()
  @Post('/search')
  @ApiOperation({ summary: 'Get all leads' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all leads.',
    type: [Lead],
  })
  getCertificatesSearch(
    @Body()
    { limit, page, ...restDto }: SearchLeadDto,
  ) {
    return this.leadsService.getLeadsSearch(
      {
        page,
        limit,
      },
      restDto.firstName,
      restDto.lastName,
      restDto.status,
    );
  }

  @Patch('/:id/status')
  @ApiOperation({ summary: 'Update a lead with id' })
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Return the lead.',
    type: Lead,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if lead.',
    type: NotFoundException,
  })
  updateLeadStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateLadStatusDto,
  ) {
    return this.leadsService.updateLeadStatus(id, dto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Remove a lead with id' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Return the lead.',
    type: Lead,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Throws exception if lead.',
    type: NotFoundException,
  })
  removeLead(@Param('id', ParseIntPipe) id: number) {
    return this.leadsService.removeLead(id);
  }
}
