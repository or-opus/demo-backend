import { ApiProperty } from "@nestjs/swagger";

export class CreateStepDto {
  @ApiProperty()
  name: string;
}
