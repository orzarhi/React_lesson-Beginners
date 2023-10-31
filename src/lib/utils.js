export const wait = async (time) => new Promise((resolve) => setTimeout(resolve, time))
export const reject = async (time) => new Promise((_, reject) => setTimeout(reject, time))

