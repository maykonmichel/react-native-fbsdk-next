/**
 * Copyright (c) 2015-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Developer Principles and Policies
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @format
 */
import {ShareContentCommonParameters} from './FBShareContent';
import ShareOpenGraphAction from './FBShareOpenGraphAction';

/**
 * Represents a content object containing information about an Open Graph Action.
 */
export type ShareOpenGraphContent = {
  /**
   * The type of content to be shared is open graph content.
   */
  contentType: 'open-graph';

  /**
   * Common parameters for share content;
   */
  commonParameters?: ShareContentCommonParameters;

  /**
   * URL for the content being shared.
   */
  contentUrl?: string;

  /**
   * Open Graph Action to be shared.
   */
  action: ShareOpenGraphAction;

  /**
   * Property name that points to the primary Open Graph Object in the action.
   */
  previewPropertyName: string;
};
