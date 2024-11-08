import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @ApiOperation({ summary: '创建用户' })
  @Post('signup')
  create(@Body() createUserDto: any) {
    return this.userService.create(createUserDto);
  }

  @ApiOperation({ summary: '获取用户信息' })
  @Get('login/:code')
  login(@Param('code') code: string) {
    return this.userService.login(code);
  }

  @ApiOperation({ summary: '获取用户手机号' })
  @Get('phone/:getPhone')
  getPhone(@Param('getPhone') getPhone: string) {
    return this.userService.getPhone(getPhone);
  }
}
