import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	HiOutlineCurrencyDollar, // For Dollar
} from 'react-icons/hi';
import { TbCircleArrowDownLeftFilled } from 'react-icons/tb'; // For PAMM
import { CgToolbox } from 'react-icons/cg'; // For Trade
import { IoWalletOutline, IoNotificationsOutline } from 'react-icons/io5'; // For Wallet and Notifications
import { FaHistory } from 'react-icons/fa'; // For History

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid /> ,
	},
	{
		key: 'CRM',
		label: 'CRM',
		path: '/products',
		icon: <HiOutlineUsers />, // CRM
	},
	{
		key: 'MAM',
		label: 'MAM',
		path: '/orders',
		icon: <HiOutlineCube />, // MAM
	},
	{
		key: 'PAMM',
		label: 'PAMM',
		path: '/customers',
		icon: <TbCircleArrowDownLeftFilled />, // PAMM
	},
	{
		key: 'Trade',
		label: 'Trade',
		path: '/transactions',
		icon: <CgToolbox />, // Trade
	},
	{
		key: 'Wallet',
		label: 'Wallet',
		path: '/messages',
		icon: <IoWalletOutline />, // Wallet
	},
	{
		key: 'Dollar',
		label: 'Dollar',
		path: '/dollar',
		icon: <HiOutlineCurrencyDollar />, // Dollar
	},
	{
		key: 'Accounts',
		label: 'Accounts',
		path: '/accounts',
		icon: <HiOutlineAnnotation />, // Accounts
	},
	{
		key: 'History',
		label: 'History',
		path: '/history',
		icon: <FaHistory />, // History
	},
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />,
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />,
	},
];
