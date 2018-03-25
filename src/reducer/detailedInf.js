import {CHANGE_DETAILED_INFORMATION} from '../constants';

const defaultInf = {
  detailedId: -1,
  detailedFirstName: '',
  detailedLastName: '',
  detailedEmail: ''
};

export default (detailedInfState = defaultInf, action) => {
  const {type, payload} = action;

  switch (type) {
    case CHANGE_DETAILED_INFORMATION:
      return {
        detailedId: payload.detailedId,
        detailedFirstName: payload.detailedFirstName,
        detailedLastName: payload.detailedLastName,
        detailedEmail: payload.detailedEmail
      };
  };

  return detailedInfState;
};