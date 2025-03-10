export type Asset = {
    _id: string;
    name: string;
    symbol: string;
    price: number;
    image_url: string;
}

export type WalletAsset = {
    _id: string;
    asset: Asset;
    shares: number;
}
export type Wallet = {
    _id: string;
    assets: WalletAsset[];
}

export enum OrderType {
    BUY = 'BUY',
    SELL = 'SELL'
}

export enum OrderStatus {
    PENDING = 'PENDING', // nao houve execucao ainda
    OPEN = 'OPEN', // esta em negociacao. partial !== 0
    CLOSED = 'CLOSED', // partial == 0
    FAILED = 'FAILED'
}

export type Order = {
    _id: string;
    asset: Asset;
    shares: number;
    partial: number;
    price: number;
    type: OrderType;
    status: OrderStatus;
}