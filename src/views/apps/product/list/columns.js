import { Link } from 'react-router-dom'

import Avatar from '@components/avatar'

import { deleteProduct, getProductById } from '../store/action'
import { store } from '@store/storeConfig/store'

import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive } from 'react-feather'

const renderClient = row => {
    const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
    // if (row.avatar.length) {
    //   return <Avatar className='mr-1' img={row.avatar} width='32' height='32' />
    // } else {
    //   return <Avatar color={color || 'primary'} className='mr-1' content={row.fullName} initials />
    // }
}

const renderRole = row => {
    const roleObj = {
        subscriber: {
            class: 'text-primary',
            icon: User
        },
        maintainer: {
            class: 'text-success',
            icon: Database
        },
        editor: {
            class: 'text-info',
            icon: Edit2
        },
        author: {
            class: 'text-warning',
            icon: Settings
        },
        admin: {
            class: 'text-danger',
            icon: Slack
        }
    }

    const Icon = roleObj[row.role] ? roleObj[row.role].icon : Edit2

    return (
        <span className='text-truncate text-capitalize align-middle'>
            <Icon size={18} className={`${roleObj[row.name] ? roleObj[row.name].class : ''} mr-50`} />
            {row.name}
        </span>
    )
}

const statusObj = {
    pending: 'light-warning',
    active: 'light-success',
    inactive: 'light-secondary'
}

export const columns = [
    {
        name: 'Category',
        minWidth: '297px',
        selector: 'fullName',
        sortable: true,
        cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
                {renderClient(row)}
                <div className='d-flex flex-column'>
                    <Link
                        to={`/apps/category/view/${row.id}`}
                        className='user-name text-truncate mb-0'
                        onClick={() => /*store.dispatch(getProductById(row.id))*/ console.log(store.dispatch(getProductById(row.id)))}
                    >
                        <span className='font-weight-bold'>{row.name}</span>
                    </Link>
                    <small className='text-truncate text-muted mb-0'>{row.sku}</small>
                </div>
            </div>
        )
    },
    {
        name: 'Image',
        minWidth: '320px',
        selector: 'image',
        sortable: true,
        cell: row => (
            <img src={`https://be-dev.beliayam.com/api/v1/${row.image}`} alt="" />
        )
    },
    {
        name: 'Position',
        minWidth: '172px',
        selector: 'role',
        sortable: true,
        cell: row => row.position
    },
    {
        name: 'Slug',
        minWidth: '138px',
        selector: 'currentPlan',
        sortable: true,
        cell: row => <span className='text-capitalize'>{row.slug}</span>
    },
    {
        name: 'Status',
        minWidth: '138px',
        selector: 'status',
        sortable: true,
        cell: row => (
            <Badge className='text-capitalize' color={statusObj[row.isActive]} pill>
                {row.status}
            </Badge>
        )
    },
    {
        name: 'Actions',
        minWidth: '100px',
        cell: row => (
            <UncontrolledDropdown>
                <DropdownToggle tag='div' className='btn btn-sm'>
                    <MoreVertical size={14} className='cursor-pointer' />
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem
                        tag={Link}
                        to={`/apps/category/view/${row.id}`}
                        className='w-100'
                        onClick={() => store.dispatch(getProductById(row.id))}
                    >
                        <FileText size={14} className='mr-50' />
                        <span className='align-middle'>Details</span>
                    </DropdownItem>
                    <DropdownItem
                        tag={Link}
                        to={`/apps/category/edit/${row.id}`}
                        className='w-100'
                        onClick={() => store.dispatch(getProductById(row.id))}
                    >
                        <Archive size={14} className='mr-50' />
                        <span className='align-middle'>Edit</span>
                    </DropdownItem>
                    <DropdownItem className='w-100' onClick={() => store.dispatch(deleteProduct(row.id))}>
                        <Trash2 size={14} className='mr-50' />
                        <span className='align-middle'>Delete</span>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
]