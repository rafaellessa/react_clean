import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { RemoteAuthentication } from './remote-authentication'

describe('RemoteAuthentication', () => {
  it('Should call http client with correct url', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string
      async post (url: string) {
        this.url = url
        return Promise.resolve()
      }
    }
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
