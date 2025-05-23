import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class MdvDto {
  @ApiProperty({
    description: '공공데이터포털에서 발급 받은 인증키',
    required: true,
  })
  serviceKey: string;

  @ApiProperty({
    description: '한 페이지 결과수',
    required: false,
  })
  @Transform(({ value }) => parseInt(value))
  pageNo: number;

  @ApiProperty({
    description: '한 페이지에 보여지는 데이터 개수',
    required: false,
  })
  @Transform(({ value }) => parseInt(value))
  numOfRows: number;

  @ApiProperty({
    description: '응답데이터 형식(xml/json) default : json',
    required: false,
    example: 'json',
  })
  type: string;

  @ApiProperty({
    description: '소분류 품목 명칭',
    required: false,
  })
  PRDLST_NM: string;

  @ApiProperty({
    description: '업체 제품 명칭',
    required: false,
  })
  PRDT_NM_CONT: string;
}
