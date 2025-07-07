import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './pedido.entity';
import { CreatePedidoDto } from './create-pedido.dto';
import { UpdatePedidoDto } from './update-pedido.dto';
import { Usuario } from '../usuario/usuario.entity';
import { Producto } from '../producto/producto.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private pedidoRepo: Repository<Pedido>,
    @InjectRepository(Usuario)
    private usuarioRepo: Repository<Usuario>,
    @InjectRepository(Producto)
    private productoRepo: Repository<Producto>,
  ) {}

  async create(dto: CreatePedidoDto): Promise<Pedido> {
    const usuario = await this.usuarioRepo.findOneBy({ id: dto.usuarioId });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');

    const productos = await this.productoRepo.findByIds(dto.productoIds);
    if (productos.length !== dto.productoIds.length) {
      throw new NotFoundException('Uno o más productos no encontrados');
    }

    const pedido = this.pedidoRepo.create({
      fecha: dto.fecha,
      usuario,
      productos,
    });

    return this.pedidoRepo.save(pedido);
  }

  findAll(): Promise<Pedido[]> {
    return this.pedidoRepo.find({ relations: ['usuario', 'productos'] });
  }

  async findOne(id: number): Promise<Pedido> {
    const pedido = await this.pedidoRepo.findOne({
      where: { id },
      relations: ['usuario', 'productos'],
    });
    if (!pedido) throw new NotFoundException('Pedido no encontrado');
    return pedido;
  }

  async update(id: number, dto: UpdatePedidoDto): Promise<Pedido> {
    const pedido = await this.findOne(id);

    if (dto.usuarioId) {
      const usuario = await this.usuarioRepo.findOneBy({ id: dto.usuarioId });
      if (!usuario) throw new NotFoundException('Usuario no encontrado');
      pedido.usuario = usuario;
    }

    if (dto.productoIds) {
      const productos = await this.productoRepo.findByIds(dto.productoIds);
      if (productos.length !== dto.productoIds.length) {
        throw new NotFoundException('Uno o más productos no encontrados');
      }
      pedido.productos = productos;
    }

    if (dto.fecha) pedido.fecha = dto.fecha;

    return this.pedidoRepo.save(pedido);
  }

  async remove(id: number): Promise<void> {
    const pedido = await this.findOne(id);
    await this.pedidoRepo.remove(pedido);
  }
}
