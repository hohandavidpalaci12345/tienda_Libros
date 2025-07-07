// src/pedido/pedido.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { Producto } from '../producto/producto.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime' }) 
  fecha: Date;

  @ManyToOne(() => Usuario, usuario => usuario.pedidos)
  usuario: Usuario;

  @ManyToMany(() => Producto)
  @JoinTable()
  productos: Producto[];
}

