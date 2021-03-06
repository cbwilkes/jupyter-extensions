#!/bin/bash
# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

PYTHON_PACKAGES=(
  shared
  jupyter-gcs-contents-manager
  jupyterlab_bigquery
  jupyterlab_vizier
  jupyterlab_comments
  jupyterlab_hwconfig
  jupyterlab_gcpscheduler
  jupyterlab_gcsfilebrowser
  jupyterlab_gitsync
  jupyterlab_ucaip
)

LAB_EXTENSION_PACKAGES=(
  jupyterlab_bigquery
  jupyterlab_vizier
  jupyterlab_comments
  jupyterlab_hwconfig
  jupyterlab_gcpscheduler
  jupyterlab_gcsfilebrowser
  jupyterlab_gitsync
  jupyterlab_ucaip
)

RELEASED_LAB_EXTENSION_PACKAGES=(
  jupyterlab_bigquery
  jupyterlab_vizier
  jupyterlab_hwconfig
  jupyterlab_gcpscheduler
  jupyterlab_gcsfilebrowser
)
