// my solution

interface IRequst {
	sum: string;
	from: number;
	to: number;
}

interface IData extends IRequst {
	databaseId?: number;
	errorMesage?: string;
	errorCode?: number;
}

// it accepts status success and failed data!
interface IResponse {
	status: 'success' | 'failed';
	data: IData;
}

// solution from course

interface IPayment {
	sum: number;
	from: number;
	to: number;
}

enum PaymentStatus {
	Success = 'success',
	Failed = 'failed',
}

interface IPaymentRequst extends IPayment {}

interface IDataSuccess extends IPayment {
	databaseId: number;
}

interface IDataFailed {
	errorMesage: string;
	errorCode: number;
}

// interface IResponse {
//     status: PaymentStatus;
//     data: IDataSuccess | IDataFailed;
// }

interface IResponseSuccess {
	status: PaymentStatus.Success;
	data: IDataSuccess;
}

interface IResponseFailed {
	status: PaymentStatus.Failed;
	data: IDataFailed;
}

function get(): IResponseSuccess | IResponseFailed {
	return {
		status: PaymentStatus.Success,
		data: {
			databaseId: 567,
			sum: 10000,
			from: 2,
			to: 4,
		},
	};
}
