import {createOrg} from './org';
import * as axios from 'axios';
import * as fs from 'fs';

let config = JSON.parse(fs.readFileSync('config.json'));

let axconfig = {
    headers: {
        'authorization': 'bearer ' + config.token
    }
};

for (let i = 0; i < config.numberOfOrgs; i++) {
    let orgId = config.startingOrgId+i;
    let org = createOrg(config.bureauCode, config.startingOrgId + i);
    //console.log(org);
    post(org);
}

function post(org){
    axios.post(config.baseurl + 'api/orgs/intake', org, axconfig)
      .then((response) => {
          console.log(org.meta.SourceBusinessId + ': ' + response.status);
      })
      .catch((error) => {
          console.log(error);
      });
}
