import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  ParseIntPipe,
  Query,
  UseInterceptors,
} from '@nestjs/common';

import { ErrorOutDto, HttpOut, SuccessOutDto } from 'types';
import { NewsService } from './news.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  async getNews(
    @Query('take', ParseIntPipe) take,
    @Query('skip', ParseIntPipe) skip,
  ): HttpOut {
    try {
      const news = await this.newsService.getNews(take, skip);

      return new SuccessOutDto(news);
    } catch (error) {
      return new ErrorOutDto(error);
    }
  }
}
