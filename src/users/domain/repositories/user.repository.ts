import { UserEntity } from '../entities/user.entity'
import { ISearchableRepository } from '@/shared/domain/repositories/searchable-repository-contracts'
import {
  SearchParams as DefaultSearchParams,
  SearchResult as DefaultSearchResult,
} from '@/shared/domain/repositories/searchable-repository-contracts'

export namespace UserRepository {
  export type Filter = string

  export class SearchParams extends DefaultSearchParams<Filter> {}

  export class SearchResult extends DefaultSearchResult<UserEntity, Filter> {}

  export interface Repository
    extends ISearchableRepository<
      UserEntity,
      Filter,
      SearchParams,
      SearchResult
    > {
    findByEmail(id: string): Promise<UserEntity>
    emailExists(email: string): Promise<void>
  }
}
