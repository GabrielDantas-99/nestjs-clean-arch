import { validate as uuidValidate } from 'uuid'
import { Entity } from '../../entity'
import { faker } from '@faker-js/faker/.'

type StubProps = {
  prop1: string
  prop2: number
  prop3: Date
}

// INFO: Stunt class to be tested
class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('Should set props and id', () => {
    const props: StubProps = { prop1: 'value1', prop2: 2, prop3: new Date() }
    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidValidate(entity._id)).toBeTruthy()
  })

  it('Should accept a valid uuid', () => {
    const props: StubProps = { prop1: 'value1', prop2: 2, prop3: new Date() }
    const id = faker.string.uuid()
    const entity = new StubEntity(props, id)

    expect(uuidValidate(entity._id)).toBeTruthy()
    expect(entity._id).toBe(id)
  })

  it('Should convert a entity to a Javascript Object', () => {
    const props: StubProps = { prop1: 'value1', prop2: 2, prop3: new Date() }
    const id = faker.string.uuid()
    const entity = new StubEntity(props, id)

    console.log(entity.toJson())
    console.log(entity)

    expect(entity.toJson()).toStrictEqual({
      id,
      ...props,
    })
  })
})
