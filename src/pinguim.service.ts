import { Injectable } from '@nestjs/common';
import { Pinguim } from './schema/pinguim.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PinguimDTO } from './dto/pinguim.dto';

@Injectable()
export class PinguimService {
  constructor (
    @InjectModel(Pinguim.name) private pinguimModel: Model<Pinguim>
  ){}

  async create(createPinguimDTO:PinguimDTO): Promise<Pinguim>{
    const pinguim = new this.pinguimModel(createPinguimDTO)
    return pinguim.save()
  }

  async findOne(id: string): Promise<Pinguim> {
    return this.pinguimModel.findById(id).exec()
  }

  async findAll(): Promise<Pinguim[]>{
    return this.pinguimModel.find().exec()
  }

  async update(id: string, updatePinguimDTO: PinguimDTO){
    return await this.pinguimModel.updateOne({_id: id,}, updatePinguimDTO)
  }

  async delete(id: string) {
    return await this.pinguimModel.findByIdAndDelete(id).exec()
  }

}
