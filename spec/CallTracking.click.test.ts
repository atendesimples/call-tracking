import { describe, it, expect, vi, afterEach } from 'vitest'

import AtendeSimples from '@/index'
import { allow, delay } from './utils'

console.info = vi.fn()

function createDiv() {
  let div = document.createElement('div')
  div.classList.add('phonenumber')
  div.innerHTML = ''

  document.body.appendChild(div)
}

describe('AtendeSimples', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('when result is success', async () => {
    createDiv()

    document.cookie = '_ga=GA1.1.553524416.1685026105;OptanonAlertBoxClosed=2023-02-01T15:12:04.164Z'

    const callTracking = new AtendeSimples.CallTracking({
      token: 'UaoPcchkelsSn0BIELN89',
      fallback: {
        error: '1234',
      },
      html: {
        event: 'click',
        selector: '.phonenumber',
      },
    })

    callTracking.load()

    let $el = document.querySelector('.phonenumber')

    let callTrackingRequestSpy = allow(callTracking).receive('checkin').returns('12345678')

    var event = new MouseEvent('click')
    $el.dispatchEvent(event)

    await delay(1)

    expect(callTrackingRequestSpy).toHaveBeenCalledOnce()
    expect(document.querySelector('.phonenumber').textContent).toBe('12345678')
  })
})
