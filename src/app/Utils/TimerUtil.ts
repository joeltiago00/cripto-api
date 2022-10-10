export default {
  async delay(milisec: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('')
      }, milisec)
    })
  },
}
