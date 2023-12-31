# Copyright © 2022 Province of British Columbia
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""Setup logging for the service."""
import logging
import os


logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s,%(msecs)d-%(name)s-%(levelname)s > %(module)s:%(filename)s:%(lineno)d-%(funcName)s:%(message)s',
    datefmt='%H:%M:%S',
)
logging.getLogger('asyncio').setLevel(logging.DEBUG)

if os.getenv('DISABLE_HTTP_ACCESS_LOGS', 'False').lower() == 'true':
    # This disables the healthz / readyz / meta logging messsages.
    logging.getLogger('aiohttp.access').setLevel(logging.ERROR)

logger = logging.getLogger('asyncio')
