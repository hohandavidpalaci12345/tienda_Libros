import { IsNotEmpty, IsDateString, IsInt, IsArray } from 'class-validator';

export class CreatePedidoDto {
  @IsNotEmpty()
  @IsDateString()
  fecha: Date;

  @IsNotEmpty()
  @IsInt()
  usuarioId: number;

  @IsArray()
  @IsInt({ each: true })
  productoIds: number[];
}
