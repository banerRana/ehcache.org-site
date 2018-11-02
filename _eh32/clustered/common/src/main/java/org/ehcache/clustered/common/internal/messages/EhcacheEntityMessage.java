/*
 * Copyright Terracotta, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.ehcache.clustered.common.internal.messages;

import org.terracotta.entity.EntityMessage;

import java.util.UUID;

/**
 * Defines messages for interactions with an {@code EhcacheActiveEntity}.
 */
public abstract class EhcacheEntityMessage implements EntityMessage {

  static final long NOT_REPLICATED = -1;

  public abstract void setId(long id);

  public abstract long getId();

  public abstract UUID getClientId();

}