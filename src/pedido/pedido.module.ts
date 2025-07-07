// src/pedido/pedido.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './pedido.entity';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { Usuario } from '../usuario/usuario.entity';
import { Producto } from '../producto/producto.entity';
import { UsuarioModule } from '../usuario/usuario.module'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Pedido, Usuario, Producto]), 
    UsuarioModule 
  ],
  controllers: [PedidoController],
  providers: [PedidoService]
})
export class PedidoModule {}
