import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Exception } from '@adonisjs/core/build/standalone'

/*
|--------------------------------------------------------------------------
| Exception
|--------------------------------------------------------------------------
|
| The Exception class imported from `@adonisjs/core` allows defining
| a status code and error code for every exception.
|
| @example
| new BadRequestException('message', 500, 'E_RUNTIME_EXCEPTION')
|
*/
export default class BadRequestException extends Exception {
  public code = 'BAD_REQUEST'

  public async handle(err: this, ctx: HttpContextContract) {
    return ctx.response.status(err.status).send({
      code: err.code,
      message: err.message,
      status: err.status,
    })
  }
}
