import { Entity } from '../entities/entity'
import { IRepository } from './repository-contracts'

export interface ISearchableRepository<
  E extends Entity,
  SearchInput,
  SearchOutput,
> extends IRepository<E> {
  search(props: SearchInput): Promise<SearchOutput>
}
