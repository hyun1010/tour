const sizeTypes = ['s', 'm'] as const
export type SizeType = (typeof sizeTypes)[number]
