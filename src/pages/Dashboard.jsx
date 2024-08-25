import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import TransactionChart from '../components/TransactionChart'
import TradingAccountLayout from '../components/TradingAccountLayout'



export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<TransactionChart />
				<TradingAccountLayout />
			</div>
			<div className="flex flex-row gap-4 w-full">
				
			
			</div>
		</div>
	)
}