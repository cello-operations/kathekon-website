import React, { useState } from "react";
import { toast } from "react-toastify";
import dayjs from 'dayjs';
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import APIHelper from '../../helpers/APIHelpers';
import { ReactComponent as DownloadIcon } from "feather-icons/dist/icons/download.svg";
import AuthContext from '../../context/AuthContext';

const DropDown = (props) => (
  <div className="flex justify-center" role="group">
  {
    props.isAdmin && (
      <>
        <button disabled={!props.pending} onClick={() => props.handleAction('APPROVED')} className={`bg-gray-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 ${!props.pending ? "opacity-50 cursor-not-allowed" : ""} rounded-l`}>
          Approve
        </button>
        <button disabled={!props.pending} onClick={() => props.handleAction('DECLINED')} className={`bg-gray-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 ${!props.pending ? "opacity-50 cursor-not-allowed" : ""}`}>
          Reject
        </button>
      </>
    )
  }
  <a download={props.fileName} href={props.file} className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded${props.isAdmin ? '-r' : ''}`}>
    <DownloadIcon style={{ display: 'inline', marginLeft: '.5rem', width: '20px' }} /> Document
  </a>
</div>
)

const Wrapper = styled.div`
  ${tw`antialiased font-sans bg-gray-200`}
`;

const Content = styled.div`
  ${tw`container mx-auto px-4 sm:px-8`}
`;

const PaddedContent = styled.div`
  ${tw`py-8`}
`;

const Heading = styled.h2`
  ${tw`text-2xl font-semibold leading-tight`}
`;

const FilterSection = styled.div`
  ${tw`my-2 flex sm:flex-row flex-col`}
`;

const FilterSectionBody = styled.div`
  ${tw`flex flex-row mb-1 sm:mb-0`}
`;

const FilterSectionContent = styled.div`
  ${tw`relative`}

  select {
    ${tw`appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
  }

  #filter-section {
    ${tw`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700`}
  }

  #fill-content-svg {
    ${tw`fill-current h-4 w-4`}
  }

  #status-dropdown {
    ${tw`appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500`}
  }
`;

const RelativeContainer = styled.div`
  ${tw`block relative`}
  
  #container-relative {
    ${tw`block relative`}

    span {
      ${tw`h-full absolute inset-y-0 left-0 flex items-center pl-2`}

      svg {
        ${tw`h-4 w-4 fill-current text-gray-500`}
      }
    }

    #search-imput {
      ${tw`appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none`}
    }
  }
`;


const GrantApplications = (props) => {
  const { state } = React.useContext(AuthContext);
  const handleApproval = async (status, application) => {
    const toastId = toast("Loading... Please wait", {
      autoClose: false,
      type: toast.TYPE.INFO,
    });
    try {
      const request = await APIHelper.patch(`/grants/applications/${application._id}`, {status});

      return toast.update(toastId, {
        render: (<p>{request.data.message}</p>),
        type: toast.TYPE.SUCCESS,
        autoClose: 7000,
      });
    } catch (error) {
      if (error.response) {
        return toast.update(toastId, {
          render: (<p>{error.response.data.message}</p>),
          type: toast.TYPE.ERROR,
          autoClose: 7000,
        });
      }
      return toast.update(toastId, {
        render: (<p>Something went wrong while treating the request, please try again later</p>),
        type: toast.TYPE.ERROR,
        autoClose: 7000,
      });
    }
  }

  return (
    <Wrapper className="antialiased font-sans bg-gray-200" style={{ width: '100%', overflow: 'auto' }}>
        <Content className="container mx-auto px-4 sm:px-8" style={{ maxWidth: '1280px' }}>
            <PaddedContent>
                <div>
                  <Heading>Grant Applications</Heading>
                </div>
                <FilterSection>
                    <FilterSectionBody className="flex flex-row mb-1 sm:mb-0">
                        <FilterSectionContent className="relative">
                            <select
                                className="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option>5</option>
                                <option>10</option>
                                <option>20</option>
                            </select>
                            <div
                              id="filter-selection"
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg id="fill-content-svg" className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </FilterSectionContent>
                        <FilterSectionContent className="relative">
                            <select
                            id="status-dropdown"
                                className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                <option>All</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                            <div
                                id="search-filter"
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg id="fill-content-svg" className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </FilterSectionContent>
                    </FilterSectionBody>
                    <div id="container-relative" className="block relative">
                        <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                <path
                                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                </path>
                            </svg>
                        </span>
                        <input id="search-input" placeholder="Search"
                            className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                    </div>
                </FilterSection>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        User
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Grant Requested
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Created at
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Options
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                              {
                                props.applications && props.applications.length > 0
                                  ? props.applications.map((application) => (
                                    
                                      <tr key={application._id}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img className="w-full h-full rounded-full"
                                                        src={application.requestedBy.avatar}
                                                        alt={`${application.requestedBy.firstName} ${application.requestedBy.lastName} profile image`} />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {`${application.requestedBy.firstName} ${application.requestedBy.lastName}`}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{
                                              application?.grantId?.grantName ?? 'N/a'
                                            }</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                            {dayjs(application.createdOn).format('DD/MMM/YYYY')}
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span
                                                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <span
                                                    className={`absolute inset-0 bg-${application.status !== "APPROVED" ? "orange" : "green"}-200 opacity-50 rounded-full`}></span>
                                                <span className="relative">{application.status}</span>
                                            </span>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <DropDown
                                              handleAction={(status) => handleApproval(status, application)}
                                              isAdmin={state.isAuthenticated && state.user.userType !== "REQUESTER"}
                                              fileName={`${application.requestedBy.firstName} ${application.requestedBy.lastName} - ${application?.grantId?.grantName} - Response`}
                                              file={application.applicationDocument}
                                              pending={application.status === 'PROCESSING'}
                                            />
                                          </span>
                                        </td>
                                    </tr>
                                )) : <center><em>No applications to view at this time</em></center>
                              }
                            </tbody>
                        </table>
                        {
                          props.grantsCount.total > 0 ? (
                          <div
                            className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                            <span className="text-xs xs:text-sm text-gray-900">
                                Showing 1 to {props.grantsCount.current} of {props.grantsCount.total} Entries
                            </span>
                            <div className="inline-flex mt-2 xs:mt-0">
                                <button
                                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                    Prev
                                </button>
                                <button
                                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                    Next
                                </button>
                            </div>
                          </div>
                         ) : (
                           <div />
                         )
                        }
                    </div>
                </div>
            </PaddedContent>
        </Content>
    </Wrapper>
  )
};

export default GrantApplications;
